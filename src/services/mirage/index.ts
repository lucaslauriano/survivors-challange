import {
  Model,
  Factory,
  Response,
  createServer,
  ActiveModelSerializer,
  JSONAPISerializer,
} from "miragejs";
import { Survivor } from "../../types/survivor";
import faker from "faker";

const makeServer = () => {
  const server = createServer({
    serializers: {
      application: ActiveModelSerializer,
    },
    models: {
      survivor: Model.extend<Partial<Survivor>>({}),
    },
    factories: {
      survivor: Factory.extend({
        name() {
          return faker.name.findName();
        },
        email() {
          return faker.internet.email();
        },
        infected() {
          return faker.datatype.boolean();
        },
        createdAt() {
          return faker.date.recent(10);
        },
      }),
    },

    seeds(server) {
      server.createList("survivor", 200);
    },

    routes() {
      this.namespace = "api";
      this.timing = 750;
      this.get("/survivors", function (schema, request) {
        const { page = 1, per_page = 10 } = request.queryParams;
        const total = schema.all("survivor").length;
        const pageStart = (Number(page) - 1) * Number(per_page);
        const pageEnd = pageStart + Number(per_page);

        const survivors = this.serialize(
          schema.all("survivor")
        ).survivors.slice(pageStart, pageEnd);

        return new Response(
          200,
          { "x-total-count": String(total) },
          { survivors }
        );
      });

      this.get("/survivors/:id");

      this.patch("/survivors/:id");

      this.namespace = "";
      this.passthrough();
    },
  });

  return server;
};

export default makeServer;

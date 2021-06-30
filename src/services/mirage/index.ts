import {
  Model,
  Factory,
  Response,
  createServer,
  ActiveModelSerializer,
} from "miragejs";

import { Survivor } from "../../types/survivor";

const makeServer = () => {
  const server = createServer({
    serializers: {
      application: ActiveModelSerializer,
    },
    models: {
      survivor: Model.extend<Partial<Survivor>>({}),
    },
    seeds(server) {
      server.create("survivor", {
        name: "Leon Scot Kennedy",
        email: "leon.kennedy@umbrellacorp.com",
        infected: false,
      } as any);
      server.create("survivor", {
        name: "Chris Reedfield",
        email: "chris.redfield@umbrellacorp.com",
        infected: false,
      } as any);
      server.create("survivor", {
        name: "Claire Redfield",
        email: "claire.redfield@umbrellacorp.com",
        infected: false,
      } as any);
      server.create("survivor", {
        name: "Ada Wong",
        email: "ada.wong@umbrellacorp.com",
        infected: false,
      } as any);
    },
    routes() {
      this.namespace = "api";
      this.timing = 750;
      this.get("/survivors", function (schema, request) {
        const {
          page = 1,
          per_page = 10,
          infecteds = false,
          search = "",
        } = request.queryParams;
        const total = schema.all("survivor").length;
        const pageStart = (Number(page) - 1) * Number(per_page);
        const pageEnd = pageStart + Number(per_page);

        const survivors = this.serialize(schema.all("survivor"))
          .survivors.filter((survivor) => {
            if (infecteds) {
              return survivor.infected;
            }
            return survivor;
          })
          .slice(pageStart, pageEnd);

        return new Response(
          200,
          { "x-total-count": String(total) },
          { survivors }
        );
      });

      this.get("/survivors/:id");

      this.put("/survivors/:id", (schema, request) => {
        let survivor = JSON.parse(request.requestBody);
        return schema.db.survivors.update(survivor.id, survivor);
      });

      this.namespace = "";
      this.passthrough();
    },
  });

  return server;
};

export default makeServer;

import { createServer, Factory, Model } from "miragejs";
import { Survivor } from "../../types/survivor";
import faker from "faker";

const makeServer = () => {
  const server = createServer({
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
      server.createList("survivor", 50);
    },

    routes() {
      this.namespace = "api";
      this.timing = 750;
      this.get("/survivors");
      this.patch("/survivors/id");
      this.namespace = "";
      this.passthrough();
    },
  });

  return server;
};

export default makeServer;

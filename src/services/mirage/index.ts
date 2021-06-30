import { Model, Response, createServer, ActiveModelSerializer } from "miragejs";

import { Survivor } from "../../types/survivors";

const makeServer = () => {
  const server = createServer({
    serializers: {
      application: ActiveModelSerializer,
    },
    models: {
      survivor: Model.extend<Partial<Survivor>>({}),
    },
    seeds(server) {
      server.db.loadData({
        survivors: [
          {
            name: "Leon Scot Kennedy",
            email: "leon.kennedy@umbrellacorp.com",
            infected: false,
            createdAt: new Date(),
          },
          {
            name: "Chris Reedfield",
            email: "chris.redfield@umbrellacorp.com",
            infected: false,
            createdAt: new Date(),
          },
          {
            name: "Claire Redfield",
            email: "claire.redfield@umbrellacorp.com",
            infected: false,
            createdAt: new Date(),
          },
          {
            name: "Ada Wong",
            email: "ada.wong@umbrellacorp.com",
            infected: false,
            createdAt: new Date(),
          },
          {
            name: "Ada Wong",
            email: "ada.wong@umbrellacorp.com",
            infected: false,
            createdAt: new Date(),
          },
        ],
      });
    },
    routes() {
      this.namespace = "api";
      this.timing = 750;
      this.get("/survivors", function (schema, request) {
        const {
          page = 1,
          per_page = 2,
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

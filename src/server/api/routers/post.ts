import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
} from " /server/api/trpc";

export const postRouter = createTRPCRouter({
  getAll: protectedProcedure.query(({ ctx }) => {
    return ctx.db.post.findMany();
  }),
});

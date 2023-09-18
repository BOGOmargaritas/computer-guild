import { pgTable, serial, text } from "drizzle-orm/pg-core";

export const emails = pgTable("emails", {
    id: serial("id").primaryKey(),
    email: text("email").unique()
});

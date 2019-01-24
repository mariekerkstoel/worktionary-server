exports.up = (knex, Promise) => {
  return knex.schema.createTable("users", table => {
    table.uuid("id").primary();
    table.text("first_name");
    table.text("last_name");
    table.string("email");
    table.text("password").notNullable();
    table.boolean("admin");
    table.uuid("company_id").references("companies.id");
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("users");
}  

exports.up = (knex, Promise) => {
  return knex.schema.createTable("companies", table => {
    table.uuid("id").primary();
    table.text("name");
    table.text("location");
    table.text("logo");
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("companies");
}  
  

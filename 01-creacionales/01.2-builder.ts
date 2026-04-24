class QueryBuilder {
  private table: string = "";
  private fields: string[] = [];
  private conditions: string[] = [];
  private orderFields: string[] = [];
  private limitCount?: number | null = null;

  constructor(table: string) {
    this.table = table;
  }

  select(...fields: string[]): QueryBuilder {
    this.fields = fields;
    return this;
  }

  where(condition: string): QueryBuilder {
    this.conditions.push(condition);
    return this;
  }

  orderBy(field: string, direction: "ASC" | "DESC" = "ASC"): QueryBuilder {
    this.orderFields.push(`order by ${field} ${direction}`);
    return this;
  }

  limit(count: number): QueryBuilder {
    this.limitCount = count;
    return this;
  }

  build(): string {
    const field = this.fields.length > 0 ? this.fields.join(", ") : "*";
    const whereClause = this.conditions.length > 0 ? `WHERE ${this.conditions.join(" AND ")}` : "";
    const whereClause2 = this.conditions.length > 0 ? `WHERE ${this.conditions.join(" AND ")}` : "";
    const orderBy = this.orderFields.length > 0 ? `ORDER BY ${this.orderFields.join(", ")}` : "";
    const limit = this.limitCount !== null ? `LIMIT ${this.limitCount}` : "";
    return `
    SELECT ${field}
    fROM ${this.table}
    ${whereClause}
    ${orderBy}
    ${limit}
    `;
  }
}

function mainBuilder2() {
  const userQuery = new QueryBuilder("users")
    .select("id", "name", "email")
    .where("age > 18")
    .where("name = 'John'")
    .where("email IS NOT NULL")
    .orderBy("name", "ASC")
    .limit(10)
    .build();

  console.log("%cQUERY ", "background: green; color: white; display: block;", userQuery);
}

mainBuilder2();

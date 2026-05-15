interface Report {
  generate(): void;
}

class SalesReport implements Report {
  generate(): void {
    console.log("%cgenerando sales report ", "background: green; color: white; display: block;");
  }
}

class InventoryReport implements Report {
  generate(): void {
    console.log("%cgenerando inventory report ", "background: blue; color: white; display: block;");
  }
}

abstract class ReportFactory {
  protected abstract createReport(): Report;

  generateReport(): void {
    const report = this.createReport();
    report.generate();
  }
}

class SalesReportFactory extends ReportFactory {
  createReport(): Report {
    return new SalesReport();
  }
}
class InventoryReportFactory extends ReportFactory {
  createReport(): Report {
    return new InventoryReport();
  }
}

function mainFactory2() {
  const reportType = prompt("¿Qué tipo de reporte deseas? (sales/inventory)")?.toLowerCase();

  let factory: ReportFactory | null = null;

  if (reportType === "sales") {
    factory = new SalesReportFactory();
  } else if (reportType === "inventory") {
    factory = new InventoryReportFactory();
  }

  factory?.generateReport();
}

mainFactory2();

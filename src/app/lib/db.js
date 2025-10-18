import sql from "mssql";

const config = {
  user: "your_sql_username",     // e.g. sa
  password: "your_sql_password", // your password
  server: "localhost",           // or your server name
  database: "RentACarDB",
  options: {
    encrypt: false, // set true if using Azure
    trustServerCertificate: true,
  },
};

let pool;

export async function connectDB() {
  try {
    if (!pool) {
      pool = await sql.connect(config);
      console.log("✅ Connected to SQL Server successfully!");
    }
    return pool;
  } catch (err) {
    console.error("❌ Database connection failed:", err);
    throw err;
  }
}

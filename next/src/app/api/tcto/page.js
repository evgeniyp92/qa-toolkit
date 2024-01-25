import dbConnect from "@/lib/dbConnect";
import TCTO from "@/models/TCTO";

export default async function handler() {
  console.log("Hello, World!");
  await dbConnect();
  const result = await TCTO.create({
    title: "Test title",
    status: "Open",
    priority: "High",
    issued: new Date(),
    suspenseDays: 90,
    fileLink: null,
  });
  console.log(result);
}

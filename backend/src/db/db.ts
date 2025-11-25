import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export default prisma

// 1. clone the project on my github Account : https://github.com/alammd0/movies_reservation_system
// 2. Run the command: npm install
// 3. docker start locally 
// 4. run the command for migrate the schema : npx prisma migrate
// 5. run the command for generate the DB : npx prisma generate 
// 6. check all good or not : npx prisma studio
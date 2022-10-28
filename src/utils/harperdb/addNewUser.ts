// import { harperFetch } from "./harperFetch";

// export const harperAddNewUser = async (username: string, taskName: string) => {
//   const existing = await harperFetch({
//     operation: "sql",
//     sql: `SELECT * FROM Auth.Users WHERE email = "${user.email}"`,
//   });

//   const data = {
//     operation: "insert",
//     schema: "auth",
//     table: "users",
//     records: [
//       {
//         username: username,
//         task_name: taskName,
//         time_in_seconds: 0,
//       },
//     ],
//   };

//   const responseAndResult = await harperFetch(data);
//   return responseAndResult;
// };

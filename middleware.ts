export {default} from "next-auth/middleware";

export const config ={
    matcher: [
        "/trips",
        "/reservations",
        "/properties",
        "/favorites",
        "/enzona",
        "/enzona/cancel",

    ]
}
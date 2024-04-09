import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/jwt.handle";
import { JwtPayload } from "jsonwebtoken";
import { RequestExt } from "../interfaces/req-ext.interface";

const checkJwt = async (req: RequestExt, res: Response, next: NextFunction) => {
    try {
        const jwtByUser = req.headers.authorization || "";
        const jwt = jwtByUser.split(' ').pop() //['Bearer', 'token'] split() nos crea un array. pop() devuelve el ultimo valor de dicho array
        const token = `${jwt}`;
        const isUser: JwtPayload | string = await verifyToken(token);
        if (typeof isUser === 'string') {
            // Si verifyToken devuelve un string, significa que hubo un error en el token
            res.status(401).send("NO_TIENES_PERMISO_SUFICIENTE_JWT");
        } else {
            // Si verifyToken devuelve un JwtPayload, lo asignamos a req.user
            req.user = isUser;
            next();
        }
    } catch (e) {
        res.status(400).send("SESSION_NO_VALIDAD");
    }
};

export { checkJwt };

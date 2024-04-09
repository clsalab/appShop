import { Router } from "express";
import { readdirSync } from "fs";

const PATH_ROUTER = `${__dirname}`;
const router = Router();

const cleanFileName = (fileName: string) => {
    const file = fileName.split(".").shift();
    return file;
}

readdirSync(PATH_ROUTER).filter((fileName) => {
    const cleanName = cleanFileName(fileName)
    if (cleanName !== "index") {
        import(`./${cleanName}`).then((moduleRouter) => {
            console.log(`Loading route... /${cleanName}`);
            if (moduleRouter.router) {
                router.use(`/${cleanName}`, moduleRouter.router);
            } else {
                console.error(`Error: No router exported in ${cleanName}`);
            }
        }).catch((err) => {
            console.error(`Error importing ${cleanName}:`, err);
        });
    }
});

export { router };

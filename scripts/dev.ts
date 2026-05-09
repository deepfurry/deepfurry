import { spawn } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createServer } from "vite";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const main = async () => {
    const tailwind = spawn(
        "npm",
        ["run", "watch:css"],
        {
            cwd: rootDir,
            stdio: "inherit",
            shell: process.platform === "win32",
        },
    );

    const server = await createServer({
        configFile: path.join(rootDir, "vite.config.ts"),
        root: rootDir,
    });

    const shutdown = async (signal?: NodeJS.Signals) => {
        tailwind.kill(signal ?? "SIGTERM");
        await server.close();
        process.exit(0);
    };

    process.on("SIGINT", () => {
        void shutdown("SIGINT");
    });

    process.on("SIGTERM", () => {
        void shutdown("SIGTERM");
    });

    tailwind.on("exit", (code) => {
        if (code && code !== 0) {
            void shutdown();
        }
    });

    await server.listen();
    server.printUrls();

    console.log("Tailwind CSS watcher and Vite dev server are running.");
};

void main();

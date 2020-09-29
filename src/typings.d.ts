declare var process: Process;

interface Process {
    env: Env
}

interface Env {
    SERVER_HOST: string
    SERVER_PORT: string
    SERVER_PROTOCOL: string
}

interface GlobalEnvironment {
    process: Process;
}
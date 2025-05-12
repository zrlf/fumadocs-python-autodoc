let __sources;
export function setSourcesContext(sources) {
    __sources = sources;
}
export function getSourcesContext() {
    if (!__sources) {
        throw new Error("Sources context is not set");
    }
    return __sources;
}
let __shikiConfig;
export function setShikiConfigContext(shikiConfig) {
    __shikiConfig = shikiConfig;
}
export function getShikiConfigContext() {
    return __shikiConfig;
}

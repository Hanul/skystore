export default class SkyStore {
    private name;
    constructor(name: string);
    set(key: string, value: any, permanently?: boolean): void;
    get<T>(key: string, defaultValue?: T): T | undefined;
    delete(key: string): void;
    checkPermanently(key: string): boolean;
}
//# sourceMappingURL=SkyStore.d.ts.map
/*
 * interface IMonitoredObject
 */

interface IMonitoredObject {
    logUpdate( message :string ): void;
    setId( newId: string): void;
    getId(): string;
}

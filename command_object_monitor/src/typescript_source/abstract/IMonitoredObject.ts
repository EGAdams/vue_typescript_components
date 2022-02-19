/*
 * interface IMonitoredObject
 * 
 * TODO: not sure why im disabling no-unused-vars here.  eslint bitching about it.
 * how does it know that this interface is never used?  wtf...
 * 
 */

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface IMonitoredObject {
    logUpdate( message :string ): void;
    setId( newId: string): void;
    getId(): string;
}

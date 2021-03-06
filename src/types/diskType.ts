export default interface IDisk {
    device?: string;
    type?: string;
    name?: string;
    vendor?: string;
    size?: number;
    bytesPerSector?: number;
    totalCylinders?: number;
    totalHeads?: number;
    totalSectors?: number;
    totalTracks?: number;
    tracksPerCylinder?: number;
    sectorsPerTrack?: number;
    firmwareRevision?: string;
    serialNum?: string;
    interfaceType?: string;
    smartStatus?: string;
}
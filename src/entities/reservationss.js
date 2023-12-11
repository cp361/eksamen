// Definerer en klasse for at kunne oprette objekter med
// samme struktur på tværs af objekter.
export class Reservation {
    constructor(dato, tid, antal, roomnumber) {
        this.dato = dato;
        this.tid = tid;
        this.antal = antal;
        this.roomnumber = roomnumber;
    }

}
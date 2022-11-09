// TODO: create the User class/object
// it must support rank, progress and the incProgress(rank) method

class User {
  constructor() {
    this.rank = -8;
    this.progress = 0;
  }

  incProgress(rank) {
    if (
      rank === 0 
      || rank > 8 
      || rank < -8
    ) {
      throw 'Invalid range values';
    }

    if (this.rank === 8) return;

    let points = 0;
    let d = rank - this.rank;
    if (rank > 0 && this.rank < 0) d--;
    if (rank < 0 && this.rank > 0) d++;
    if (d === 0) {
      points = 3;
    } else if (d === -1) {
      points = 1;
    } else if (d > 0) {
      points = 10 * d * d;
    }

    while (points >= 100) {
      if (this.rank < 8) {
        this.rank++;
        if (this.rank === 0) this.rank++;
      }
      if (this.rank === 8) {
        this.progress = 0;
        return;
      }
      points -= 100;
    }

    if (points + this.progress >= 100) {
      if (this.rank < 8) {
        this.rank++;
        if (this.rank === 0) this.rank++;
      }
      if (this.rank === 8) {
        this.progress = 0;
        return;
      }
      this.progress = (points + this.progress) % 100;
    } else {
      this.progress += points;
    }
  }
}
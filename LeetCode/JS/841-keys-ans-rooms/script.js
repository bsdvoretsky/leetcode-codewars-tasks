/**
 * @param {number[][]} rooms
 * @return {boolean}
 */

var canVisitAllRooms = function(rooms) {
  let visitedRooms = new Set();
  let keys = new Set();

  const visitRoom = (index) => {
    let room = rooms[index];

    visitedRooms.add(index);

    for (let j = 0; j < room.length; j++) {
      keys.add(room[j]);
      if (!visitedRooms.has(room[j])) visitRoom(room[j]);
    }
  }

  visitRoom(0);

  if (keys.has(0)) keys.delete(0);

  return keys.size === rooms.length - 1;
};
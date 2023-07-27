class ClassRoom {
  constructor(maxStudentsSize) {
    this._maxStudentsSize = maxStudentsSize;
  }
}
export default function initializeRooms() {
  return [19, 20, 34].map((size) => new ClassRoom(size));
}

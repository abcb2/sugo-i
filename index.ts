export interface Friend {
    firstName: string
}

export function printFriend(friend: Friend) {
    console.log(friend.firstName + 'さん すごーい!');
}


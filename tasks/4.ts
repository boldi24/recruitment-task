import { UserEntity, UserComment } from './somewhere';

export class SomeClass {
   async addUserComment(commentData) {
    let response = { error: null, message: null};
    const userId = commentData.userId

    if (!commentData.message || commentData.message.length == 0) {
      response.error = "Message not present"
    } else if (commentData.message.length > 80) {
      commentData.message = commentData.message.substring(0, 79) + '...';
    } else {
      const user = await (new UserEntity()).find(userId)

      if (user.status == "banned") {
        response.error = "User is banned, cannot comment!"
      } else if (user.expiresAt < Date.now()) {
        if (user.role != "admin") {
          response.error = "User is expired and is not an admin, cannot comment!"
        } else {
          const comment = new UserComment(commentData);
          await comment.save();

          response.message = "Success"
        }
      }
    }

    return response;
  }
}

/** Tasks */

/**
 * Task 1: Please list code smells from that code
 *
 * @description Open question
 * @example missing types, terrible nested ifs, object mutation,no dependency injection, bad error handling
 */

/**
 * Task 2: How you would refactor/rewrite this method to be readable.
 *
 * @description Might be pseudo code, might be real TS, might be just a talk extending the Task 1
 */

/**
 * Task 3:
 * @description You receive a task from Product Team: "We want to track comments in our analytics module,
 * please call Analytics Service with some payload"
 *
 * @example Payload: { userId: 123, notificationType: "COMMENT_PUBLISHED"}
 */

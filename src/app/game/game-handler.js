import { Trivia } from "./trivia.js";

/**
 * Stores active game sessions by ID.
 */
const GAME_SESSIONS = {}

/**
 * Handles creating a new game session.  Method will return
 * the existing game session if one already exists for the {id}
 * 
 * @param {*} id represent the id of the game session.
 * @returns {Trivia} instance.
 */
export const createGameSession = (id) => {

    if (id in GAME_SESSIONS) {

        return GAME_SESSIONS[id].get;
    }

    const CREATED_GAME = new Trivia(id);

    return (GAME_SESSIONS[id] = CREATED_GAME);
}
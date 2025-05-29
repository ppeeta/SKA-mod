/*:
 * @target MZ
 * @plugindesc Force keyboard-only; ignores game-pad polling.
 */
(() => {
  Input.updateGamepadState = function () {};   // ← disables the poll
})();

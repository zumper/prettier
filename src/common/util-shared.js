"use strict";

const {
  getMaxContinuousCount,
  getStringWidth,
  getAlignmentSize,
  getIndentSize,
  skip,
  skipWhitespace,
  skipSpaces,
  skipNewline,
  skipToLineEnd,
  skipEverythingButNewLine,
  skipInlineComment,
  skipTrailingComment,
  hasNewline,
  hasNewlineInRange,
  hasSpaces,
  isNextLineEmpty,
  isNextLineEmptyAfterIndex,
  isPreviousLineEmpty,
  getNextNonSpaceNonCommentCharacterIndex,
  makeString,
  addLeadingComment,
  addDanglingComment,
  addTrailingComment,
} = require("./util");

function writtenWithParens(node, options) {
  const text = options.originalText;
  return /[(]\s*$/.test(text.slice(0, node.start)) && /^\s*[)]/.test(text.slice(node.end))
}

module.exports = {
  getMaxContinuousCount,
  getStringWidth,
  getAlignmentSize,
  getIndentSize,
  skip,
  skipWhitespace,
  skipSpaces,
  skipNewline,
  skipToLineEnd,
  skipEverythingButNewLine,
  skipInlineComment,
  skipTrailingComment,
  hasNewline,
  hasNewlineInRange,
  hasSpaces,
  isNextLineEmpty,
  isNextLineEmptyAfterIndex,
  isPreviousLineEmpty,
  getNextNonSpaceNonCommentCharacterIndex,
  makeString,
  addLeadingComment,
  addDanglingComment,
  addTrailingComment,
  writtenWithParens,
};

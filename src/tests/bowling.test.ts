import { BowlingGame } from "../bowling-game";

describe("Bowling Game Acceptance Tests", () => {
  it("Correctly scores a whole Bowling games based on a regular game scenario", () => {
    const bowlingGame = new BowlingGame()

    bowlingGame.roll(10)
    bowlingGame.roll(6)
    bowlingGame.roll(4)
    bowlingGame.roll(5)
    bowlingGame.roll(4)
    bowlingGame.roll(10)
    bowlingGame.roll(1)
    bowlingGame.roll(2)
    bowlingGame.roll(4)
    bowlingGame.roll(6)
    bowlingGame.roll(1)
    bowlingGame.roll(1)
    bowlingGame.roll(10)
    bowlingGame.roll(10)
    bowlingGame.roll(5)
    bowlingGame.roll(5)
    bowlingGame.roll(8)

    expect(bowlingGame.score()).toBe(136)
  });

  it("Correctly scores 300 for a perfect game", () => {
    const bowlingGame = new BowlingGame()

    bowlingGame.roll(10)
    bowlingGame.roll(10)
    bowlingGame.roll(10)
    bowlingGame.roll(10)
    bowlingGame.roll(10)
    bowlingGame.roll(10)
    bowlingGame.roll(10)
    bowlingGame.roll(10)
    bowlingGame.roll(10)
    bowlingGame.roll(10)
    bowlingGame.roll(10)
    bowlingGame.roll(10)

    expect(bowlingGame.score()).toBe(300)
  });
});

describe("Bowling Game Unit Tests", () => {
  it("When a game starts, the score starts at 0", () => {
    const bowlingGame = new BowlingGame()

    expect(bowlingGame.score()).toBe(0)
  });

  it("When a frame is completed without spare or strike, it adds the number of pins down to the score", () => {
    const bowlingGame = new BowlingGame()
    bowlingGame.roll(5)

    expect(bowlingGame.score()).toBe(5)
  });

  it("Should accumulates the score after two rolls", () => {
    const bowlingGame = new BowlingGame()
    bowlingGame.roll(1)
    bowlingGame.roll(2)

    expect(bowlingGame.score()).toBe(3)
  });

  it("Should score strike correctly with successive rolls", () => {
    const bowlingGame = new BowlingGame()
    bowlingGame.roll(10)
    bowlingGame.roll(6)
    bowlingGame.roll(2)

    expect(bowlingGame.score()).toBe(26)
  });

  it("Should score strike correctly with only 2 successive roll", () => {
    const bowlingGame = new BowlingGame()
    bowlingGame.roll(10)
    bowlingGame.roll(6)
    bowlingGame.roll(2)
    bowlingGame.roll(5)

    expect(bowlingGame.score()).toBe(31)
  });

  it("Should score spare correctly with a successive roll", () => {
    const bowlingGame = new BowlingGame()
    bowlingGame.roll(4)
    bowlingGame.roll(6)
    bowlingGame.roll(2)

    expect(bowlingGame.score()).toBe(14)
  });

  it("Should not score a spare if 10 is reached in more than two rolls", () => {
    const bowlingGame = new BowlingGame()
    bowlingGame.roll(2)
    bowlingGame.roll(4)
    bowlingGame.roll(4)
    bowlingGame.roll(2)

    expect(bowlingGame.score()).toBe(12)
  });

  it("Should have bonus roll after 10th turns is completed with a spare", () => {
    const bowlingGame = new BowlingGame()
    bowlingGame.roll(2)
    bowlingGame.roll(4)
    bowlingGame.roll(4)
    bowlingGame.roll(2)

    expect(bowlingGame.score()).toBe(12)
  });

  it("Should correctly count spare scores when occuring after first roll", () => {
    const bowlingGame = new BowlingGame()
    bowlingGame.roll(2)
    bowlingGame.roll(4)
    bowlingGame.roll(6)
    bowlingGame.roll(4)
    bowlingGame.roll(2)

    expect(bowlingGame.score()).toBe(20)
  });

  it("Should accumulate bonus rolls in the case of successive strikes", () => {
    const bowlingGame = new BowlingGame()
    bowlingGame.roll(10)
    bowlingGame.roll(10)
    bowlingGame.roll(8)

    expect(bowlingGame.score()).toBe(54)
  });
});
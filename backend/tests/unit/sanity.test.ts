//backend/tests/unit/sanity.test.ts

import { describe, expect, it } from "vitest";

describe("Sanity Check", () => {
    it("should confirm Vitest is working", () => {
        expect(2 + 2).toBe(4);
    });
});
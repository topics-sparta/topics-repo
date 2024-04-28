import { GET } from "../app/api/get-food-info/route";

describe("GET request to USDA API", () => {
  it("happy path: returns correct food info", async () => {
    const request = {
      nextUrl: {
        searchParams: {
          get: jest.fn().mockReturnValue("857777004218"),
        },
      },
    };
    const expectedData = {
      brandName: 'RXBAR',
      name: 'COCONUT CHOCOLATE PROTEIN BARS, COCONUT CHOCOLATE',
      servingSize: 52,
      servingSizeUnit: 'g',
      calories: 193,
      protein: 11,
      carbohydrates: 21,
      fat: 8,
      fiber: 5
    }
    const response = await GET(request);
    const data = await response.json();
    expect(response.status).toBe(200);
    expect(data).toEqual(expectedData);
  });

  it("sad path: returns error message if no food found", async () => {
    const request = {
      nextUrl: {
        searchParams: {
          get: jest.fn().mockReturnValue("99999999999999999"),
        },
      },
    };
    const response = await GET(request);
    const data = await response.json();
    expect(response.status).toBe(500);
    expect(data.error).toBe("No food found");
  });
});
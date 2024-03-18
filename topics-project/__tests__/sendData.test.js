// Import the module where sendData function is defined
const { sendData } = require('../app/customfoods/action.js');

// Mock the Supabase client
jest.mock('../src/utils/supabase/server', () => ({
  createClient: () => ({
    from: () => ({
      insert: jest.fn(() => {
        return Promise.resolve({ data: { id: 1 }, error: null });
      }),
    }),
  }),
}));

describe('sendData function', () => {
  let errorSpy;

  beforeEach(() => {
    errorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    errorSpy.mockRestore();
  });

  it('check for successfull send  to Supabase', async () => {
    const handledFormData = {
      food_name: 'Test_Food',
      calories: 95,
      protein: 0,
      fat: 0,
      carbs: 25,
    };

    const result = await sendData(handledFormData);

    expect(result).toBeUndefined(); // result should not give us feedback
    expect(errorSpy).not.toHaveBeenCalled(); // no errors displayed
  });

  it('logs an error when food_name is empty', async () => {
    const incorrectFormData = {
      food_name: '',
      calories: 1,
      protein: 0,
      fat: 0,
      carbs: 25,
    };

    await sendData(incorrectFormData);

    expect(errorSpy).toHaveBeenCalled();
    expect(errorSpy).toHaveBeenCalledWith("Error: Food name is required."); // checks for an error from an empty food name
  });

  it('logs an error when calories is a string', async () => {
    const incorrectFormData = {
      food_name: 'Test_Food',
      calories: 'Not a number',
      protein: 0,
      fat: 0,
      carbs: 25,
    };

    await sendData(incorrectFormData);

    expect(errorSpy).toHaveBeenCalled();
    expect(errorSpy).toHaveBeenCalledWith("Error: Calories must be a positive number."); // expects for calories error
  });

  it('logs an error when protein is a string', async () => {
    const incorrectFormData = {
      food_name: 'Test_Food',
      calories: 120,
      protein: 'Not a number',
      fat: 0,
      carbs: 25,
    };

    await sendData(incorrectFormData);

    expect(errorSpy).toHaveBeenCalled();
    expect(errorSpy).toHaveBeenCalledWith('Error: Protein must be a positive number.'); // expects for proiten error 
  });
  it('logs an error when fat is a string', async () => {
    const incorrectFormData = {
      food_name: 'Test_Food',
      calories: 120,
      protein: 20,
      fat: 'Not a number',
      carbs: 25,
    };

    await sendData(incorrectFormData);

    expect(errorSpy).toHaveBeenCalled();
    expect(errorSpy).toHaveBeenCalledWith('Error: Fat must be a positive number.'); // expects for proiten error 
  });

  it('logs an error when carbs is a string', async () => {
    const incorrectFormData = {
      food_name: 'Test_Food',
      calories: 120,
      protein: 10,
      fat: 0,
      carbs: 'Not a number',
    };

    await sendData(incorrectFormData);

    expect(errorSpy).toHaveBeenCalled();
    expect(errorSpy).toHaveBeenCalledWith('Error: Carbs must be a positive number.'); // expects for proiten error 
  });

  
});
  

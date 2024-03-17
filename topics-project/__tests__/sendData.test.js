// Import the module where sendData function is defined
const { sendData } = require('../app/customfoods/action.js');

// Mock the Supabase client
jest.mock('../src/utils/supabase/server', () => ({
  createClient: () => ({
    from: () => ({
      insert: jest.fn((data) => {
        if (data[0].food_name === '') {
          return Promise.resolve({ error: new Error('Food Name cant be empty') });
        } else if (typeof data[0].calories === 'string') {
          return Promise.resolve({ error: new Error('calories must be a number') });
        } else if (typeof data[0].protein === 'string') {
          return Promise.resolve({ error: new Error('protein must be a number') });
        } else if (typeof data[0].fat === 'string') {
          return Promise.resolve({ error: new Error('fat must be a number') });
        } else if (typeof data[0].carbs === 'string') {
          return Promise.resolve({ error: new Error('carbs must be a number') });
        }
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
    expect(errorSpy).toHaveBeenCalledWith(expect.anything(), new Error('Food Name cant be empty')); // checks for an error from an empty food name
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
    expect(errorSpy).toHaveBeenCalledWith(expect.anything(), new Error('calories must be a number')); // expects for calories error
  });

  it('logs an error when protien is a string', async () => {
    const incorrectFormData = {
      food_name: 'Test_Food',
      calories: 120,
      protein: 'Not a number',
      fat: 0,
      carbs: 25,
    };

    await sendData(incorrectFormData);

    expect(errorSpy).toHaveBeenCalled();
    expect(errorSpy).toHaveBeenCalledWith(expect.anything(), new Error('protein must be a number')); // expects for proiten error 
  });

  
});
  

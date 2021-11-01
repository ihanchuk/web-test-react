import { get, set, deepCopy } from "./index";

const mockData = JSON.stringify({
    id:1,
    a: {
        b: {
            c:{
                testValue: 'James Bond',
                testArray: ['Episode 1', 'Episode 2', 'Episode 3']
            },
            d: [1,4,5]
        }
    },
    arr: ['First', 'Second', 'Last']
});

let testData;

beforeAll(() =>{
    testData = JSON.parse(mockData);
})

afterEach(() => {
    testData = JSON.parse(mockData);  
})

test('gets first level property', () => {
    const fetchedValue = get(testData, '.id', null) 
    expect(fetchedValue).toBe(1);
});

test('gets deeply nested property', () => {
    const fetchedValue = get(testData, '.a.b.c.testValue', null) 
    expect(fetchedValue).toBe(testData.a.b.c.testValue);
});

test('gets array element by path', () => {
    const fetchedValue = get(testData, '.arr[0]', null) 
    expect(fetchedValue).toBe(testData.arr[0]);
});

test('gets deeply nested array element by path', () => {
    const fetchedValue = get(testData, '.a.b.c.testArray[1]', null) 
    expect(fetchedValue).toBe(testData.a.b.c.testArray[1]);
});

test('creates deep copy of array', () => {
    const deep = deepCopy(mockData); 
    deep.id = 100;
    expect(deep.id === testData.id).toBe(false);
});


test('sets value with nested path', () => {
    const deep = deepCopy(mockData); 
    set(deep, '.super.hero.name', 'Batman')
    expect(deep.super.hero.name).toBe('Batman');
});
const {Builder, Capabilities} = require("selenium-webdriver")

const {By} = require('selenium-webdriver')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://127.0.0.1:5501/movieList/index.html')
 })
 
 afterAll(async () => {
     await driver.quit()
 })

 const addMovie = async (driver) => {
    await driver.findElement(By.xpath('//input')).sendKeys('The Batman')

   await driver.findElement(By.xpath('//button[text()="Add"]')).click() 

   const movie = await driver.findElement(By.xpath('//li'))

   expect(movie.isDisplayed()).toBeTruthy()
}

const crossOffMovie = async driver => {
    await driver.findElement(By.xpath('//span')).click()
}

const uncrossOffMovie = async driver => {
    await driver.findElement(By.xpath('//span')).click()
}

 const deleteMovie = async (driver) => {
     await driver.findElement(By.xpath('//button[text()="x"]')).click()

 }

 test('adds a movie to the list', async () => {
    await addMovie(driver)

    await driver.sleep(1000)
})


test('cross off movie from the list', async () => {
    await crossOffMovie(driver)
    
    await driver.sleep(1000)
})

test('uncross off the movie', async () => {
    await uncrossOffMovie(driver)

    await driver.sleep(1000)
})


test('deletes movie from the list', async () => {
    await deleteMovie(driver)

    await driver.sleep(1000)
})
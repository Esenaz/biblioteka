class Book {
    amount = 10
    itsTaken = 0 
  
    constructor(name) {
      this.name = name;
    }
  
    give() {
      if (this.amount > 0) {
        this.amount--;
        this.itsTaken++;
        console.log(`Книга "${this.name}" выдана`);
      } else {
        console.log(`Книг "${this.name}" нет в наличии`);
      }
    }
  
    takeBack() {
      if (this.itsTaken > 0) {
        this.amount++;
        this.itsTaken--;
        console.log(`Книга "${this.name}" возвращена`);
      } else {
        console.log(`Книга "${this.name}" не была выдана`);
      }
    }
  
    getInfo() {
      console.log(`Название "${this.name}". Всего книг доступно: ${this.amount}. Книгу брали ${this.itsTaken} раз`);
    }
  }
  
  const harry = new Book('Harry Potter')
  
  harry.give()
  harry.takeBack()
  
  harry.getInfo()
  
  const warAndPeace = new Book('War and Peace')
  
  warAndPeace.give()
  warAndPeace.give()
  warAndPeace.takeBack()
  warAndPeace.give()
  warAndPeace.give()
  warAndPeace.give()
  warAndPeace.takeBack()
  warAndPeace.give()
  warAndPeace.takeBack()
  
  warAndPeace.getInfo()
class Pet
  attr_reader :color, :breed
  attr_accessor :name

  def initialize(color, breed)
    @color = color
    @breed = breed
    @hungry = true
  end #end initialize

  def feed(food)
    puts "Mmmm, " + food + "!"
    @hungry = false
  end #end feed

  def hungry?
    if @hungry
      puts "I'm hungry!"
    else
      puts "I'm full!"
    end #end if/else
    @hungry
  end #end hungry
end #end class Pet

class Cat < Pet
  def speak
    puts "Meow!"
  end #end speak
end #end class Cat

class Dog < Pet
  def speak
    puts "Woof!"
  end
end

kitty = Cat.new("grey", "Persian")




puts "Let's inspect our new cat:"
puts kitty.inspect
puts "What class does our new cat belong to?"
puts kitty.class
puts "Is our new cat an object?"
puts kitty.is_a?(Object)
puts "What color is our cat?"
puts kitty.color
# puts kitty.breed
puts "Let's give our new cat a name"
kitty.name = "Betsy"
puts kitty.name

puts "Is our cat hungry now?"
kitty.hungry?
puts "Let's feed our cat"
kitty.feed("tuna")
puts "Is our cat hungry now?"
kitty.hungry?
puts "Our cat can make noise"
kitty.speak

# Let's inspect our new cat:
# #<Cat:0x82c4d60 @color="grey", @breed="Persian", @hungry=true>
# What class does our new cat belong to?
# Cat
# Is our new cat an object?
# true
# What color is our cat?
# grey
# Let's give our new cat a name
# Betsy
# Is our cat hungry now?
# I'm hungry!
# Let's feed our cat
# Mmmm, tuna!
# Is our cat hungry now?
# I'm full!
# Our cat can make noise
# Meow!

puppy = Dog.new("black", "Staffordshire Terrier")

puts "Our puppy can make noise"
puppy.speak
puts "What kind of dog is that?"
puts puppy.breed
puts "What is the color of puppy?"
puts puppy.color

# Our puppy can make noise
# Woof!
# What kind of dog is that?
# Staffordshire Terrier
# What is the color of puppy?
# black

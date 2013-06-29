def calculator 										# define method named calculator
	puts "Please enter first digit:"				# ask for two digits
	first_digit = gets.chomp						
	puts "Please enter second digit:"
	second_digit = gets.chomp						# save digits in variables
	case @response1									# when response1 = operators:
		when "+" # addition 						# use string iterpolation
			puts "Result is #{first_digit.to_i + second_digit.to_i}."
		when "-" # subtraction
			puts "Result is #{first_digit.to_i - second_digit.to_i}."
		when "*" # multiply
			puts "Result is #{first_digit.to_i * second_digit.to_i}."
		when "/" # divide
			puts "Result is #{first_digit.to_i / second_digit.to_i}."
		when "exp"
			puts "Result is #{first_digit.to_i ** second_digit.to_i}."
		when "mod"
			puts "Result is #{first_digit.to_i % second_digit.to_i}."
		when "sin"
			puts "Result is #{Math.sin(first_digit.to_i)} and #{Math.sin(second_digit.to_i)}."
		when "cosine"
			puts "Result is #{Math.cos(first_digit.to_i)} and #{Math.cos(second_digit.to_i)}."
		end
	end

while true										
puts "Please enter an operator + - / * or enter q to quit."
@response1 = gets.chomp
	if (@response1 == "q")  						# if response1 = q, break
		break
	else											# all else, run calculator method
		calculator
	end
end
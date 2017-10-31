# Include the helper gateway class
require 'AfricasTalkingGateway'

username = "KennedyOtieno";
# env = "sandbox";
apikey   = "9f072129e0b34163eb8460a42f537bbb1564f50f8ca069fa779e27c64171f4e1";

# Specify the numbers that you want to send to in a comma-separated list
# Please ensure you include the country code (+254 for Kenya)
to      = "+254724587654";

message = "Rubyyyyyy...."

gateway = AfricasTalkingGateway.new(username, apikey)

begin
  # Thats it, hit send and we'll take care of the rest.
  reports = gateway.sendMessage(to, message)
  
  reports.each {|x|
    # status is either "Success" or "error message"
    puts 'number=' + x.number + ';status=' + x.status + ';messageId=' + x.messageId + ';cost=' + x.cost
  }
rescue AfricasTalkingGatewayException => ex
  puts 'Encountered an error: ' + ex.message
end
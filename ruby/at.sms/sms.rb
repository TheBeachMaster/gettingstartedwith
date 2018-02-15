# Include the helper gateway class
require 'AfricasTalkingGateway'

username = "me";
apikey   = "key";

# Specify the numbers that you want to send to in a comma-separated list
# Please ensure you include the country code (+254 for Kenya)
to      = "+NUM,+NUM";

message = "Sample SMS Code written in Ruby,by you know who 😉...."

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
require 'uri'
require 'net/http'

url = URI("https://payments.sandbox.africastalking.com/mobile/checkout/request")

http = Net::HTTP.new(url.host, url.port)
# http.use_ssl = true
# http.verify_mode = OpenSSL::SSL::VERIFY_NONE

request = Net::HTTP::Post.new(url)
request["content-type"] = 'application/json'
request["apikey"] = 'afd635a4f295dd936312836c0b944d55f2a836e8ff2b63987da5e717cd5ff745'
request.body = "{ \n  \"username\":\"sandbox\",\n  \"productName\":\"coolproduct\",\n  \"phoneNumber\": \"254724587654\",\n  \"currencyCode\":\"KES\",\n  \"amount\":50\n}"

response = http.request(request)
puts response.read_body 
# Read about factories at http://github.com/thoughtbot/factory_girl

Factory.define :user do |f|
  f.location "MyString"
  f.can_help false
  f.fb_id "MyString"
  f.tw_id "MyString"
  f.phone "MyString"
  f.email "MyString"
end

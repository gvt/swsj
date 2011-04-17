# Read about factories at http://github.com/thoughtbot/factory_girl

Factory.define :category, :class => Admin::Category do |f|
  f.title "MyString"
end

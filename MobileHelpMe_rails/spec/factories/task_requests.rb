# Read about factories at http://github.com/thoughtbot/factory_girl

Factory.define :task_request do |f|
  f.category_id 123
  f.description "some longer description"
  f.location "123 Your St, SF CA"
end

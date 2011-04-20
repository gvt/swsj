// TaskRequest
// t.integer  "category_id"
// t.string   "description"
// t.string   "location"
// t.datetime "created_at"
// t.datetime "updated_at"
//
Resource.model("TaskRequest", {
    format: "json",
    prefix: "http://localhost:3000",
});

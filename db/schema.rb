# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20161003221424) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "categories", force: :cascade do |t|
    t.json     "music",          default: []
    t.json     "photography",    default: []
    t.json     "videography",    default: []
    t.json     "muralist",       default: []
    t.json     "painting",       default: []
    t.json     "drawing",        default: []
    t.json     "sculpture",      default: []
    t.json     "graphic_design", default: []
    t.json     "performance",    default: []
    t.json     "literature",     default: []
    t.json     "hand_made",      default: []
    t.string   "cat_type"
    t.integer  "cat_id"
    t.datetime "created_at",                  null: false
    t.datetime "updated_at",                  null: false
    t.index ["cat_type", "cat_id"], name: "index_categories_on_cat_type_and_cat_id", using: :btree
  end

  create_table "conversations", force: :cascade do |t|
    t.integer  "sent_from"
    t.integer  "sent_to"
    t.string   "subject"
    t.text     "body"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "messages", force: :cascade do |t|
    t.text     "body",            null: false
    t.integer  "user_id"
    t.integer  "conversation_id"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.index ["conversation_id"], name: "index_messages_on_conversation_id", using: :btree
    t.index ["user_id"], name: "index_messages_on_user_id", using: :btree
  end

  create_table "profiles", force: :cascade do |t|
    t.string   "zip_code"
    t.text     "bio"
    t.string   "inspirations"
    t.string   "youtube"
    t.string   "soundcloud"
    t.string   "vimeo"
    t.string   "facebook"
    t.string   "twitter"
    t.string   "tumbler"
    t.string   "instagram"
    t.string   "other"
    t.integer  "user_id"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.string   "image_url"
    t.index ["user_id"], name: "index_profiles_on_user_id", using: :btree
  end

  create_table "projects", force: :cascade do |t|
    t.string   "name"
    t.string   "description"
    t.boolean  "collab"
    t.boolean  "active"
    t.integer  "profile_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["profile_id"], name: "index_projects_on_profile_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet     "current_sign_in_ip"
    t.inet     "last_sign_in_ip"
    t.string   "first_name",                          null: false
    t.string   "last_name",                           null: false
    t.string   "username",                            null: false
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree
  end

  add_foreign_key "messages", "conversations"
  add_foreign_key "messages", "users"
end

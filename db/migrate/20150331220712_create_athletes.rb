class CreateAthletes < ActiveRecord::Migration
  def change
    create_table :athletes do |t|
      t.string :name
      t.string :email
      t.string :category

      t.timestamps
    end
  end
end

class CreateRequests < ActiveRecord::Migration[6.0]
  def change
    create_table :requests do |t|
      t.integer :user_clinic_id
      t.integer :other_clinic_id
      t.integer :patient_id
      t.string :status

      t.timestamps
    end
  end
end

class Athlete < ActiveRecord::Base
	after_create { |athlete| athlete.message 'insertAthlete' }
	after_update { |athlete| athlete.message 'updateAthlete' }
	after_destroy { |athlete| athlete.message 'destroyAthlete' }

	def message action
		$redis.publish action, self.to_json
	end
end

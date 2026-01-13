from config.config import Config

class DataValidator:
    """Validate input data"""
    
    @staticmethod
    def validate_patient_data(data):
        """Validate patient data against rules"""
        errors = []
        rules = Config.VALIDATION_RULES
        
        for field, value in data.items():
            if field not in rules:
                continue
                
            rule = rules[field]
            
            # Check range validation
            if 'min' in rule and 'max' in rule:
                if not (rule['min'] <= value <= rule['max']):
                    errors.append(
                        f"{field} must be between {rule['min']} and {rule['max']}"
                    )
            
            # Check specific values
            if 'values' in rule:
                if value not in rule['values']:
                    errors.append(
                        f"{field} must be one of {rule['values']}"
                    )
        
        # Blood pressure logic check
        if data.get('ap_hi') and data.get('ap_lo'):
            if data['ap_hi'] <= data['ap_lo']:
                errors.append("Systolic BP must be greater than Diastolic BP")
        
        return errors

    @staticmethod
    def validate_required_fields(data):
        """Check if all required fields are present"""
        required_fields = [
            'age', 'gender', 'height', 'weight', 'ap_hi', 'ap_lo',
            'cholesterol', 'gluc', 'smoke', 'alco', 'active'
        ]
        
        missing = [field for field in required_fields if field not in data]
        
        if missing:
            return f"Missing required fields: {', '.join(missing)}"
        return None